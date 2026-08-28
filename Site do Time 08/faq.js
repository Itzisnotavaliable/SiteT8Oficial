const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach((pergunta) => {

  pergunta.addEventListener("click", () => {

    const item = pergunta.parentElement;

    item.classList.toggle("aberto");


    const simbolo = pergunta.querySelector("span");

    if (item.classList.contains("aberto")) {
      simbolo.textContent = "×";
    } else {
      simbolo.textContent = "+";
    }

  });

});