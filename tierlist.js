const tierPool = document.getElementById("tierPool");

const areasTier = document.querySelectorAll(".tier-area");

const botaoSalvar = document.getElementById("salvarTier");

const botaoResetar = document.getElementById("resetarTier");


function criarCardTier(filme, index) {

  const card = document.createElement("div");

  card.classList.add("tier-card");

  card.draggable = true;

  card.dataset.index = index;

  card.innerHTML = `
    <img
      src="${filme.poster}"
      alt="${filme.titulo}"
      title="${filme.titulo}"
    >
  `;


  card.addEventListener("dragstart", () => {

    card.classList.add("arrastando");

  });


  card.addEventListener("dragend", () => {

    card.classList.remove("arrastando");

  });


  return card;

}


function carregarFilmes() {

  tierPool.innerHTML = "";

  filmes.forEach((filme, index) => {

    const card =
      criarCardTier(filme, index);

    tierPool.appendChild(card);

  });

}


function prepararAreas() {

  const todasAreas = [
    ...areasTier,
    tierPool
  ];


  todasAreas.forEach((area) => {

    area.addEventListener("dragover", (event) => {

      event.preventDefault();

      const card =
        document.querySelector(".arrastando");

      if (card) {
        area.appendChild(card);
      }

    });

  });

}


function salvarTierList() {

  const resultado = {};


  areasTier.forEach((area) => {

    const tier =
      area.dataset.tier;

    const cards =
      area.querySelectorAll(".tier-card");


    resultado[tier] =
      [...cards].map(
        card => card.dataset.index
      );

  });


  const naoClassificados =
    [...tierPool.querySelectorAll(".tier-card")]
      .map(
        card => card.dataset.index
      );


  resultado.naoClassificados =
    naoClassificados;


  localStorage.setItem(
    "tierListTime08",
    JSON.stringify(resultado)
  );


  botaoSalvar.textContent =
    "Salvo!";

  setTimeout(() => {

    botaoSalvar.textContent =
      "Salvar Tier List";

  }, 1500);

}


function carregarTierListSalva() {

  const salvo =
    localStorage.getItem(
      "tierListTime08"
    );


  if (!salvo) {
    return;
  }


  const dados =
    JSON.parse(salvo);


  areasTier.forEach((area) => {

    const tier =
      area.dataset.tier;

    const indices =
      dados[tier] || [];


    indices.forEach((indice) => {

      const card =
        document.querySelector(
          `.tier-card[data-index="${indice}"]`
        );


      if (card) {
        area.appendChild(card);
      }

    });

  });


  const naoClassificados =
    dados.naoClassificados || [];


  naoClassificados.forEach((indice) => {

    const card =
      document.querySelector(
        `.tier-card[data-index="${indice}"]`
      );


    if (card) {
      tierPool.appendChild(card);
    }

  });

}


function resetarTierList() {

  localStorage.removeItem(
    "tierListTime08"
  );


  carregarFilmes();


  botaoResetar.textContent =
    "Resetado!";


  setTimeout(() => {

    botaoResetar.textContent =
      "Resetar";

  }, 1500);

}


botaoSalvar.addEventListener(
  "click",
  salvarTierList
);


botaoResetar.addEventListener(
  "click",
  resetarTierList
);


carregarFilmes();

prepararAreas();

carregarTierListSalva();