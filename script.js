const score = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); // ici on créer la base d'une bulle

  document.body.appendChild(bubble); // on affecte le parent de bubble

  bubble.classList.add("bubble");

  let size = Math.trunc(Math.random() * 200 + 100) + "px";

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.trunc(Math.random() * 100 + 50) + "%";
  bubble.style.left = Math.trunc(Math.random() * 100) + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // ceci est une condition ternaire, c'est une if else mais sur une seule ligne, quand on à une seule conditon

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    score.textContent = counter;
    console.log(counter);
    bubble.remove();
  });

  

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
// ici on a generer les positions des bulles

setInterval(bubbleMaker, 300);
