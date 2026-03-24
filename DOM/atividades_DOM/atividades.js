// Atividade 1 - Mudar cor do título
let titulo = document.querySelector("#titulo");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

azul.addEventListener("click", function () {
  titulo.style.color = "blue";
});

vermelho.addEventListener("click", function () {
  titulo.style.color = "red";
});

// Ativadide 2 - Mostrar e esconder parágrafo
let botaoToggle = document.querySelector("#botaoToggle");
let mensagem = document.querySelector("#mensagem");
botaoToggle.addEventListener("click", function () {
  mensagem.classList.toggle("oculto");
});
// Atividade 3 - Contador de caracteres
let texto = document.querySelector("#texto");
let contador = document.querySelector("#contador");

texto.addEventListener("keyup", function () {
  let quantidade = texto.value.length;
  contador.textContent = "Caracteres digitados: " + quantidade;
});

// Atividade 4 - Contador de cliques
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

let contadorCliques = 0;

botao.addEventListener("click", function () {
  contadorCliques++;
  resultado.textContent = "Cliques: " + contadorCliques;
});

// Atividade 5 e 6 + Extra
let input = document.querySelector("#item");
let botaoAdicionar = document.querySelector("#adicionar");
let lista = document.querySelector("#lista");

botaoAdicionar.addEventListener("click", function () {
  if (input.value !== "") {
    let novoItem = document.createElement("li");
    novoItem.textContent = input.value;
    lista.appendChild(novoItem);
    input.value = "";
    novoItem.addEventListener("click", function () {
      if (confirm("Deseja remover este item?")) {
        novoItem.remove();
      }
    });
  }
});
// Atividade 8 - Validação de Campos
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginButton = document.querySelector("#loginButton");
let mensagemEmail = document.querySelector("#mensagemEmail");

loginButton.addEventListener("click", function () {

  if (email.value.includes("@") && email.value.includes(".")) {
    mensagemEmail.textContent = "Email válido";
  } else {
    console.log("Email inválido");
    mensagemEmail.textContent = "Email inválido, Exemplo: texto@texto.texto";
  }

});

password.addEventListener("input", function () {

  if (password.value.length < 6) {
    mensagemSenha.textContent = "Senha fraca";
    mensagemSenha.style.color = "red";
  } else if (password.value.length >= 6 && password.value.length < 12) {
    mensagemSenha.textContent = "Senha aceitável";
    mensagemSenha.style.color = "orange";
  } else {
    mensagemSenha.textContent = "Senha forte";
    mensagemSenha.style.color = "green";
  }

});