const usuarios = [
  {
    usuario: "usuario1",
    senha: "1234"
  },

  {
    usuario: "usuario2",
    senha: "1234"
  },

  {
    usuario: "usuario3",
    senha: "1234"
  },

  {
    usuario: "usuario4",
    senha: "1234"
  },

  {
    usuario: "usuario5",
    senha: "1234"
  }
];


function entrar() {

  const usuarioDigitado =
    document.getElementById("usuario").value;

  const senhaDigitada =
    document.getElementById("senha").value;

  const erro =
    document.getElementById("erro");


  const usuarioEncontrado = usuarios.find(
    conta =>
      conta.usuario === usuarioDigitado &&
      conta.senha === senhaDigitada
  );


  if (usuarioEncontrado) {

    erro.textContent = "";

    alert("Login realizado!");

  } else {

    erro.textContent =
      "Usuário ou senha incorretos.";

  }

}