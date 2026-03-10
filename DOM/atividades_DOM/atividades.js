// Atividade 1 - Mudar cor do título
let titulo = document.querySelector("#titulo");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

azul.addEventListener("click", function() {
    titulo.style.color = "blue";
});

vermelho.addEventListener("click", function() {
    titulo.style.color = "red";
});

// Ativadide 2 - Mostrar e esconder parágrafo
let botaoToggle = document.querySelector("#botaoToggle");
let mensagem = document.querySelector("#mensagem");
botaoToggle.addEventListener("click", function() {
  mensagem.classList.toggle("oculto");
});
// Atividade 3 - Contador de caracteres
let texto = document.querySelector("#texto");
let contador = document.querySelector("#contador");

texto.addEventListener("keyup", function() {
  let quantidade = texto.value.length;
  contador.textContent = "Caracteres digitados: " + quantidade;
});

// Atividade 4 - Contador de cliques
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

let contadorCliques = 0;

botao.addEventListener("click", function() {
  contadorCliques++;
  resultado.textContent = "Cliques: " + contadorCliques;
});

// Atividade 5 e 6 + Extra
let input = document.querySelector("#item");
let botaoAdicionar = document.querySelector("#adicionar");
let lista = document.querySelector("#lista");

botaoAdicionar.addEventListener("click", function() {
  if (input.value !== "") {
    let novoItem = document.createElement("li");
    novoItem.textContent = input.value;
    lista.appendChild(novoItem);
    input.value = "";
     novoItem.addEventListener("click", function() {
     if (confirm("Deseja remover este item?")) {
       novoItem.remove();
     }
     });
  }
});