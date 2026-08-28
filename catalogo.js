const areaCards = document.getElementById("cards");
const modal = document.getElementById("modal");

filmes.forEach((filme) => {
  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
    <img src="${filme.poster}" alt="${filme.titulo}">
    <p>${filme.titulo}</p>
  `;

  card.addEventListener("click", () => {
    abrirDetalhes(filme);
  });

  areaCards.appendChild(card);
});


function abrirDetalhes(filme) {

  document.getElementById("modalPoster").src = filme.poster;

  document.getElementById("modalTitulo").textContent =
    filme.titulo;

  document.getElementById("modalSinopse").textContent =
    filme.sinopse;

  document.getElementById("modalAno").textContent =
    "Ano de lançamento: " + filme.ano;

  document.getElementById("modalElenco").textContent =
    "Elenco: " + filme.elenco.join(", ");

  modal.classList.add("ativo");
}


function fecharDetalhes() {
  modal.classList.remove("ativo");
}